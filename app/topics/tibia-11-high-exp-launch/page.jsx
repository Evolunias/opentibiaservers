import Tibia11HighExpLaunchKeywordPage, { generateMetadata } from './tibia-11-high-exp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11HighExpLaunchKeywordPage />;
}
