import RealeraCommandsKeywordPage, { generateMetadata } from './realera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraCommandsKeywordPage />;
}
