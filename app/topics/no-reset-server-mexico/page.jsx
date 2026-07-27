import NoResetServerMexicoKeywordPage, { generateMetadata } from './no-reset-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerMexicoKeywordPage />;
}
