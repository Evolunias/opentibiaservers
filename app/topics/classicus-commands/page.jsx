import ClassicusCommandsKeywordPage, { generateMetadata } from './classicus-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusCommandsKeywordPage />;
}
