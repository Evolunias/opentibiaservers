import OriginaltibiaCommandsKeywordPage, { generateMetadata } from './originaltibia-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaCommandsKeywordPage />;
}
