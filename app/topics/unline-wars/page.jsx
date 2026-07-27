import UnlineWarsKeywordPage, { generateMetadata } from './unline-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineWarsKeywordPage />;
}
