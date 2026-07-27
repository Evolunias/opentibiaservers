import ImperianicArgentinaServersKeywordPage, { generateMetadata } from './imperianic-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicArgentinaServersKeywordPage />;
}
