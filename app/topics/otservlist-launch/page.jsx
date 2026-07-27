import OtservlistLaunchKeywordPage, { generateMetadata } from './otservlist-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistLaunchKeywordPage />;
}
