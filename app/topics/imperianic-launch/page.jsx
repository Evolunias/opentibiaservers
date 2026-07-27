import ImperianicLaunchKeywordPage, { generateMetadata } from './imperianic-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicLaunchKeywordPage />;
}
