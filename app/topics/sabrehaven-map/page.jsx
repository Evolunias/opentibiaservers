import SabrehavenMapKeywordPage, { generateMetadata } from './sabrehaven-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenMapKeywordPage />;
}
