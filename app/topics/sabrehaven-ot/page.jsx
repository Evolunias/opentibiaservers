import SabrehavenOtKeywordPage, { generateMetadata } from './sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenOtKeywordPage />;
}
