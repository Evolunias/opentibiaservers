import ClassickDrakoriaTrailerKeywordPage, { generateMetadata } from './classick-drakoria-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaTrailerKeywordPage />;
}
