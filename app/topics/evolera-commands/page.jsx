import EvoleraCommandsKeywordPage, { generateMetadata } from './evolera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraCommandsKeywordPage />;
}
