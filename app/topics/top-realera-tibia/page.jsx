import TopRealeraTibiaKeywordPage, { generateMetadata } from './top-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraTibiaKeywordPage />;
}
