import RookgaardTalesCommandsKeywordPage, { generateMetadata } from './rookgaard-tales-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesCommandsKeywordPage />;
}
