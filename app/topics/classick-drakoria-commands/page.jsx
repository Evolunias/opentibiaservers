import ClassickDrakoriaCommandsKeywordPage, { generateMetadata } from './classick-drakoria-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaCommandsKeywordPage />;
}
