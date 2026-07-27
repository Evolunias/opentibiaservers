import LowrateSabrehavenOtKeywordPage, { generateMetadata } from './lowrate-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenOtKeywordPage />;
}
