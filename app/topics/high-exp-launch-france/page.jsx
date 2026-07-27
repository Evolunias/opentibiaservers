import HighExpLaunchFranceKeywordPage, { generateMetadata } from './high-exp-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchFranceKeywordPage />;
}
