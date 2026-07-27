import SabrehavenArgentinaServerKeywordPage, { generateMetadata } from './sabrehaven-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenArgentinaServerKeywordPage />;
}
