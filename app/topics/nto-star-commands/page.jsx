import NtoStarCommandsKeywordPage, { generateMetadata } from './nto-star-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCommandsKeywordPage />;
}
