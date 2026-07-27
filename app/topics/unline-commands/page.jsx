import UnlineCommandsKeywordPage, { generateMetadata } from './unline-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineCommandsKeywordPage />;
}
