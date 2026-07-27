import RangerSArcaniCommandsKeywordPage, { generateMetadata } from './ranger-s-arcani-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniCommandsKeywordPage />;
}
