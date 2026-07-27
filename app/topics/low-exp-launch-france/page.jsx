import LowExpLaunchFranceKeywordPage, { generateMetadata } from './low-exp-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchFranceKeywordPage />;
}
