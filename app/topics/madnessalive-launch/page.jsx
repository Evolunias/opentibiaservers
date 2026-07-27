import MadnessaliveLaunchKeywordPage, { generateMetadata } from './madnessalive-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveLaunchKeywordPage />;
}
