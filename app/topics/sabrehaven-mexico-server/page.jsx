import SabrehavenMexicoServerKeywordPage, { generateMetadata } from './sabrehaven-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenMexicoServerKeywordPage />;
}
