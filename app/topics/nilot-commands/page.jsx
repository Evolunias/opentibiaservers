import NilotCommandsKeywordPage, { generateMetadata } from './nilot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCommandsKeywordPage />;
}
