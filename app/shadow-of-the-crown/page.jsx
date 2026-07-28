import ShadowOfTheCrownPage, { generateMetadata } from './shadow-of-the-crown';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowOfTheCrownPage />;
}
