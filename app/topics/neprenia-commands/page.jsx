import NepreniaCommandsKeywordPage, { generateMetadata } from './neprenia-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaCommandsKeywordPage />;
}
