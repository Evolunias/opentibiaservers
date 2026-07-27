import ClassicusWarsKeywordPage, { generateMetadata } from './classicus-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusWarsKeywordPage />;
}
