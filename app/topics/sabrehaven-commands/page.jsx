import SabrehavenCommandsKeywordPage, { generateMetadata } from './sabrehaven-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCommandsKeywordPage />;
}
