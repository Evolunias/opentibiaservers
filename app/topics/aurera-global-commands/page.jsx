import AureraGlobalCommandsKeywordPage, { generateMetadata } from './aurera-global-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalCommandsKeywordPage />;
}
