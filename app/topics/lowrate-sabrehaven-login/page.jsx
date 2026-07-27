import LowrateSabrehavenLoginKeywordPage, { generateMetadata } from './lowrate-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenLoginKeywordPage />;
}
