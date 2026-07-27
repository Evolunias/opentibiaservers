import LowrateSabrehavenOfficialKeywordPage, { generateMetadata } from './lowrate-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenOfficialKeywordPage />;
}
