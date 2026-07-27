import SerenityCommandsKeywordPage, { generateMetadata } from './serenity-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCommandsKeywordPage />;
}
