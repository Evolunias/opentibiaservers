import ClassickDrakoriaOpenTibiaKeywordPage, { generateMetadata } from './classick-drakoria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaOpenTibiaKeywordPage />;
}
