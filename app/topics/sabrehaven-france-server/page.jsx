import SabrehavenFranceServerKeywordPage, { generateMetadata } from './sabrehaven-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenFranceServerKeywordPage />;
}
