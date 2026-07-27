import LowrateSabrehavenKeywordPage, { generateMetadata } from './lowrate-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenKeywordPage />;
}
