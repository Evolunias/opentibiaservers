import BlazeraCommandsKeywordPage, { generateMetadata } from './blazera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraCommandsKeywordPage />;
}
