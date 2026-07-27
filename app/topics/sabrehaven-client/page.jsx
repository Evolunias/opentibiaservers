import SabrehavenClientKeywordPage, { generateMetadata } from './sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenClientKeywordPage />;
}
