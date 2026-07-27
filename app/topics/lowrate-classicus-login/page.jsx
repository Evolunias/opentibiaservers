import LowrateClassicusLoginKeywordPage, { generateMetadata } from './lowrate-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusLoginKeywordPage />;
}
