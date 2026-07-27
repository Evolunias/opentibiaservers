import UnlineBrazilServersKeywordPage, { generateMetadata } from './unline-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBrazilServersKeywordPage />;
}
