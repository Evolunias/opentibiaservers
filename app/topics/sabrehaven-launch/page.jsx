import SabrehavenLaunchKeywordPage, { generateMetadata } from './sabrehaven-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLaunchKeywordPage />;
}
