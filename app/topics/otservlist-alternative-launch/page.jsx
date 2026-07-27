import OtservlistAlternativeLaunchKeywordPage, { generateMetadata } from './otservlist-alternative-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeLaunchKeywordPage />;
}
