import CanobCommandsKeywordPage, { generateMetadata } from './canob-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobCommandsKeywordPage />;
}
