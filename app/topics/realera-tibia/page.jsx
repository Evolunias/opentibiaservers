import RealeraTibiaKeywordPage, { generateMetadata } from './realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraTibiaKeywordPage />;
}
