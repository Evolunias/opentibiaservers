import KasteriaCommandsKeywordPage, { generateMetadata } from './kasteria-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCommandsKeywordPage />;
}
