import ImperianicLauncherKeywordPage, { generateMetadata } from './imperianic-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicLauncherKeywordPage />;
}
