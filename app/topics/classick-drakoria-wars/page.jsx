import ClassickDrakoriaWarsKeywordPage, { generateMetadata } from './classick-drakoria-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaWarsKeywordPage />;
}
