import ImperianicSwedenServersKeywordPage, { generateMetadata } from './imperianic-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSwedenServersKeywordPage />;
}
