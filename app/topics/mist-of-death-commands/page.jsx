import MistOfDeathCommandsKeywordPage, { generateMetadata } from './mist-of-death-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathCommandsKeywordPage />;
}
