import TibijkaCommandsKeywordPage, { generateMetadata } from './tibijka-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaCommandsKeywordPage />;
}
