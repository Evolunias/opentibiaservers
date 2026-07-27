import HighrateSabrehavenClientKeywordPage, { generateMetadata } from './highrate-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenClientKeywordPage />;
}
