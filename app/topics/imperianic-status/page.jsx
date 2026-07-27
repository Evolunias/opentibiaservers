import ImperianicStatusKeywordPage, { generateMetadata } from './imperianic-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicStatusKeywordPage />;
}
